# -*- coding: utf-8 -*-
import os
import json
import tccli.options_define as OptionsDefine
import tccli.format_output as FormatOutput
from tccli.nice_command import NiceCommand
import tccli.error_msg as ErrorMsg
import tccli.help_template as HelpTemplate
from tccli import __version__
from tccli.utils import Utils
from tccli.configure import Configure
from tencentcloud.common import credential
from tencentcloud.common.profile.http_profile import HttpProfile
from tencentcloud.common.profile.client_profile import ClientProfile
from tencentcloud.scf.v20180416 import scf_client as scf_client_v20180416
from tencentcloud.scf.v20180416 import models as models_v20180416
from tccli.services.scf import v20180416
from tccli.services.scf.v20180416 import help as v20180416_help


def doListVersionByFunction(argv, arglist):
    g_param = parse_global_arg(argv)
    if "help" in argv:
        show_help("ListVersionByFunction", g_param[OptionsDefine.Version])
        return

    param = {
        "FunctionName": argv.get("--FunctionName"),
        "Namespace": argv.get("--Namespace"),
        "Offset": Utils.try_to_json(argv, "--Offset"),
        "Limit": Utils.try_to_json(argv, "--Limit"),
        "Order": argv.get("--Order"),
        "OrderBy": argv.get("--OrderBy"),

    }
    cred = credential.Credential(g_param[OptionsDefine.SecretId], g_param[OptionsDefine.SecretKey])
    http_profile = HttpProfile(
        reqTimeout=60 if g_param[OptionsDefine.Timeout] is None else int(g_param[OptionsDefine.Timeout]),
        reqMethod="POST",
        endpoint=g_param[OptionsDefine.Endpoint]
    )
    profile = ClientProfile(httpProfile=http_profile, signMethod="HmacSHA256")
    mod = CLIENT_MAP[g_param[OptionsDefine.Version]]
    client = mod.ScfClient(cred, g_param[OptionsDefine.Region], profile)
    client._sdkVersion += ("_CLI_" + __version__)
    models = MODELS_MAP[g_param[OptionsDefine.Version]]
    model = models.ListVersionByFunctionRequest()
    model.from_json_string(json.dumps(param))
    rsp = client.ListVersionByFunction(model)
    result = rsp.to_json_string()
    jsonobj = None
    try:
        jsonobj = json.loads(result)
    except TypeError as e:
        jsonobj = json.loads(result.decode('utf-8')) # python3.3
    FormatOutput.output("action", jsonobj, g_param[OptionsDefine.Output], g_param[OptionsDefine.Filter])


def doUpdateNamespace(argv, arglist):
    g_param = parse_global_arg(argv)
    if "help" in argv:
        show_help("UpdateNamespace", g_param[OptionsDefine.Version])
        return

    param = {
        "Namespace": argv.get("--Namespace"),
        "Description": argv.get("--Description"),

    }
    cred = credential.Credential(g_param[OptionsDefine.SecretId], g_param[OptionsDefine.SecretKey])
    http_profile = HttpProfile(
        reqTimeout=60 if g_param[OptionsDefine.Timeout] is None else int(g_param[OptionsDefine.Timeout]),
        reqMethod="POST",
        endpoint=g_param[OptionsDefine.Endpoint]
    )
    profile = ClientProfile(httpProfile=http_profile, signMethod="HmacSHA256")
    mod = CLIENT_MAP[g_param[OptionsDefine.Version]]
    client = mod.ScfClient(cred, g_param[OptionsDefine.Region], profile)
    client._sdkVersion += ("_CLI_" + __version__)
    models = MODELS_MAP[g_param[OptionsDefine.Version]]
    model = models.UpdateNamespaceRequest()
    model.from_json_string(json.dumps(param))
    rsp = client.UpdateNamespace(model)
    result = rsp.to_json_string()
    jsonobj = None
    try:
        jsonobj = json.loads(result)
    except TypeError as e:
        jsonobj = json.loads(result.decode('utf-8')) # python3.3
    FormatOutput.output("action", jsonobj, g_param[OptionsDefine.Output], g_param[OptionsDefine.Filter])


def doInvoke(argv, arglist):
    g_param = parse_global_arg(argv)
    if "help" in argv:
        show_help("Invoke", g_param[OptionsDefine.Version])
        return

    param = {
        "FunctionName": argv.get("--FunctionName"),
        "InvocationType": argv.get("--InvocationType"),
        "Qualifier": argv.get("--Qualifier"),
        "ClientContext": argv.get("--ClientContext"),
        "LogType": argv.get("--LogType"),
        "Namespace": argv.get("--Namespace"),
        "RoutingKey": argv.get("--RoutingKey"),

    }
    cred = credential.Credential(g_param[OptionsDefine.SecretId], g_param[OptionsDefine.SecretKey])
    http_profile = HttpProfile(
        reqTimeout=60 if g_param[OptionsDefine.Timeout] is None else int(g_param[OptionsDefine.Timeout]),
        reqMethod="POST",
        endpoint=g_param[OptionsDefine.Endpoint]
    )
    profile = ClientProfile(httpProfile=http_profile, signMethod="HmacSHA256")
    mod = CLIENT_MAP[g_param[OptionsDefine.Version]]
    client = mod.ScfClient(cred, g_param[OptionsDefine.Region], profile)
    client._sdkVersion += ("_CLI_" + __version__)
    models = MODELS_MAP[g_param[OptionsDefine.Version]]
    model = models.InvokeRequest()
    model.from_json_string(json.dumps(param))
    rsp = client.Invoke(model)
    result = rsp.to_json_string()
    jsonobj = None
    try:
        jsonobj = json.loads(result)
    except TypeError as e:
        jsonobj = json.loads(result.decode('utf-8')) # python3.3
    FormatOutput.output("action", jsonobj, g_param[OptionsDefine.Output], g_param[OptionsDefine.Filter])


def doDeleteFunction(argv, arglist):
    g_param = parse_global_arg(argv)
    if "help" in argv:
        show_help("DeleteFunction", g_param[OptionsDefine.Version])
        return

    param = {
        "FunctionName": argv.get("--FunctionName"),
        "Namespace": argv.get("--Namespace"),

    }
    cred = credential.Credential(g_param[OptionsDefine.SecretId], g_param[OptionsDefine.SecretKey])
    http_profile = HttpProfile(
        reqTimeout=60 if g_param[OptionsDefine.Timeout] is None else int(g_param[OptionsDefine.Timeout]),
        reqMethod="POST",
        endpoint=g_param[OptionsDefine.Endpoint]
    )
    profile = ClientProfile(httpProfile=http_profile, signMethod="HmacSHA256")
    mod = CLIENT_MAP[g_param[OptionsDefine.Version]]
    client = mod.ScfClient(cred, g_param[OptionsDefine.Region], profile)
    client._sdkVersion += ("_CLI_" + __version__)
    models = MODELS_MAP[g_param[OptionsDefine.Version]]
    model = models.DeleteFunctionRequest()
    model.from_json_string(json.dumps(param))
    rsp = client.DeleteFunction(model)
    result = rsp.to_json_string()
    jsonobj = None
    try:
        jsonobj = json.loads(result)
    except TypeError as e:
        jsonobj = json.loads(result.decode('utf-8')) # python3.3
    FormatOutput.output("action", jsonobj, g_param[OptionsDefine.Output], g_param[OptionsDefine.Filter])


def doPublishVersion(argv, arglist):
    g_param = parse_global_arg(argv)
    if "help" in argv:
        show_help("PublishVersion", g_param[OptionsDefine.Version])
        return

    param = {
        "FunctionName": argv.get("--FunctionName"),
        "Description": argv.get("--Description"),
        "Namespace": argv.get("--Namespace"),

    }
    cred = credential.Credential(g_param[OptionsDefine.SecretId], g_param[OptionsDefine.SecretKey])
    http_profile = HttpProfile(
        reqTimeout=60 if g_param[OptionsDefine.Timeout] is None else int(g_param[OptionsDefine.Timeout]),
        reqMethod="POST",
        endpoint=g_param[OptionsDefine.Endpoint]
    )
    profile = ClientProfile(httpProfile=http_profile, signMethod="HmacSHA256")
    mod = CLIENT_MAP[g_param[OptionsDefine.Version]]
    client = mod.ScfClient(cred, g_param[OptionsDefine.Region], profile)
    client._sdkVersion += ("_CLI_" + __version__)
    models = MODELS_MAP[g_param[OptionsDefine.Version]]
    model = models.PublishVersionRequest()
    model.from_json_string(json.dumps(param))
    rsp = client.PublishVersion(model)
    result = rsp.to_json_string()
    jsonobj = None
    try:
        jsonobj = json.loads(result)
    except TypeError as e:
        jsonobj = json.loads(result.decode('utf-8')) # python3.3
    FormatOutput.output("action", jsonobj, g_param[OptionsDefine.Output], g_param[OptionsDefine.Filter])


def doDeleteTrigger(argv, arglist):
    g_param = parse_global_arg(argv)
    if "help" in argv:
        show_help("DeleteTrigger", g_param[OptionsDefine.Version])
        return

    param = {
        "FunctionName": argv.get("--FunctionName"),
        "TriggerName": argv.get("--TriggerName"),
        "Type": argv.get("--Type"),
        "Namespace": argv.get("--Namespace"),
        "TriggerDesc": argv.get("--TriggerDesc"),
        "Qualifier": argv.get("--Qualifier"),

    }
    cred = credential.Credential(g_param[OptionsDefine.SecretId], g_param[OptionsDefine.SecretKey])
    http_profile = HttpProfile(
        reqTimeout=60 if g_param[OptionsDefine.Timeout] is None else int(g_param[OptionsDefine.Timeout]),
        reqMethod="POST",
        endpoint=g_param[OptionsDefine.Endpoint]
    )
    profile = ClientProfile(httpProfile=http_profile, signMethod="HmacSHA256")
    mod = CLIENT_MAP[g_param[OptionsDefine.Version]]
    client = mod.ScfClient(cred, g_param[OptionsDefine.Region], profile)
    client._sdkVersion += ("_CLI_" + __version__)
    models = MODELS_MAP[g_param[OptionsDefine.Version]]
    model = models.DeleteTriggerRequest()
    model.from_json_string(json.dumps(param))
    rsp = client.DeleteTrigger(model)
    result = rsp.to_json_string()
    jsonobj = None
    try:
        jsonobj = json.loads(result)
    except TypeError as e:
        jsonobj = json.loads(result.decode('utf-8')) # python3.3
    FormatOutput.output("action", jsonobj, g_param[OptionsDefine.Output], g_param[OptionsDefine.Filter])


def doGetFunction(argv, arglist):
    g_param = parse_global_arg(argv)
    if "help" in argv:
        show_help("GetFunction", g_param[OptionsDefine.Version])
        return

    param = {
        "FunctionName": argv.get("--FunctionName"),
        "Qualifier": argv.get("--Qualifier"),
        "Namespace": argv.get("--Namespace"),
        "ShowCode": argv.get("--ShowCode"),

    }
    cred = credential.Credential(g_param[OptionsDefine.SecretId], g_param[OptionsDefine.SecretKey])
    http_profile = HttpProfile(
        reqTimeout=60 if g_param[OptionsDefine.Timeout] is None else int(g_param[OptionsDefine.Timeout]),
        reqMethod="POST",
        endpoint=g_param[OptionsDefine.Endpoint]
    )
    profile = ClientProfile(httpProfile=http_profile, signMethod="HmacSHA256")
    mod = CLIENT_MAP[g_param[OptionsDefine.Version]]
    client = mod.ScfClient(cred, g_param[OptionsDefine.Region], profile)
    client._sdkVersion += ("_CLI_" + __version__)
    models = MODELS_MAP[g_param[OptionsDefine.Version]]
    model = models.GetFunctionRequest()
    model.from_json_string(json.dumps(param))
    rsp = client.GetFunction(model)
    result = rsp.to_json_string()
    jsonobj = None
    try:
        jsonobj = json.loads(result)
    except TypeError as e:
        jsonobj = json.loads(result.decode('utf-8')) # python3.3
    FormatOutput.output("action", jsonobj, g_param[OptionsDefine.Output], g_param[OptionsDefine.Filter])


def doGetFunctionAddress(argv, arglist):
    g_param = parse_global_arg(argv)
    if "help" in argv:
        show_help("GetFunctionAddress", g_param[OptionsDefine.Version])
        return

    param = {
        "FunctionName": argv.get("--FunctionName"),
        "Qualifier": argv.get("--Qualifier"),
        "Namespace": argv.get("--Namespace"),

    }
    cred = credential.Credential(g_param[OptionsDefine.SecretId], g_param[OptionsDefine.SecretKey])
    http_profile = HttpProfile(
        reqTimeout=60 if g_param[OptionsDefine.Timeout] is None else int(g_param[OptionsDefine.Timeout]),
        reqMethod="POST",
        endpoint=g_param[OptionsDefine.Endpoint]
    )
    profile = ClientProfile(httpProfile=http_profile, signMethod="HmacSHA256")
    mod = CLIENT_MAP[g_param[OptionsDefine.Version]]
    client = mod.ScfClient(cred, g_param[OptionsDefine.Region], profile)
    client._sdkVersion += ("_CLI_" + __version__)
    models = MODELS_MAP[g_param[OptionsDefine.Version]]
    model = models.GetFunctionAddressRequest()
    model.from_json_string(json.dumps(param))
    rsp = client.GetFunctionAddress(model)
    result = rsp.to_json_string()
    jsonobj = None
    try:
        jsonobj = json.loads(result)
    except TypeError as e:
        jsonobj = json.loads(result.decode('utf-8')) # python3.3
    FormatOutput.output("action", jsonobj, g_param[OptionsDefine.Output], g_param[OptionsDefine.Filter])


def doListNamespaces(argv, arglist):
    g_param = parse_global_arg(argv)
    if "help" in argv:
        show_help("ListNamespaces", g_param[OptionsDefine.Version])
        return

    param = {
        "Limit": Utils.try_to_json(argv, "--Limit"),
        "Offset": Utils.try_to_json(argv, "--Offset"),
        "Orderby": argv.get("--Orderby"),
        "Order": argv.get("--Order"),

    }
    cred = credential.Credential(g_param[OptionsDefine.SecretId], g_param[OptionsDefine.SecretKey])
    http_profile = HttpProfile(
        reqTimeout=60 if g_param[OptionsDefine.Timeout] is None else int(g_param[OptionsDefine.Timeout]),
        reqMethod="POST",
        endpoint=g_param[OptionsDefine.Endpoint]
    )
    profile = ClientProfile(httpProfile=http_profile, signMethod="HmacSHA256")
    mod = CLIENT_MAP[g_param[OptionsDefine.Version]]
    client = mod.ScfClient(cred, g_param[OptionsDefine.Region], profile)
    client._sdkVersion += ("_CLI_" + __version__)
    models = MODELS_MAP[g_param[OptionsDefine.Version]]
    model = models.ListNamespacesRequest()
    model.from_json_string(json.dumps(param))
    rsp = client.ListNamespaces(model)
    result = rsp.to_json_string()
    jsonobj = None
    try:
        jsonobj = json.loads(result)
    except TypeError as e:
        jsonobj = json.loads(result.decode('utf-8')) # python3.3
    FormatOutput.output("action", jsonobj, g_param[OptionsDefine.Output], g_param[OptionsDefine.Filter])


def doUpdateFunctionConfiguration(argv, arglist):
    g_param = parse_global_arg(argv)
    if "help" in argv:
        show_help("UpdateFunctionConfiguration", g_param[OptionsDefine.Version])
        return

    param = {
        "FunctionName": argv.get("--FunctionName"),
        "Description": argv.get("--Description"),
        "MemorySize": Utils.try_to_json(argv, "--MemorySize"),
        "Timeout": Utils.try_to_json(argv, "--Timeout"),
        "Runtime": argv.get("--Runtime"),
        "Environment": Utils.try_to_json(argv, "--Environment"),
        "Namespace": argv.get("--Namespace"),
        "VpcConfig": Utils.try_to_json(argv, "--VpcConfig"),
        "Role": argv.get("--Role"),
        "ClsLogsetId": argv.get("--ClsLogsetId"),
        "ClsTopicId": argv.get("--ClsTopicId"),
        "Publish": argv.get("--Publish"),
        "L5Enable": argv.get("--L5Enable"),
        "Layers": Utils.try_to_json(argv, "--Layers"),
        "DeadLetterConfig": Utils.try_to_json(argv, "--DeadLetterConfig"),
        "OnsEnable": argv.get("--OnsEnable"),

    }
    cred = credential.Credential(g_param[OptionsDefine.SecretId], g_param[OptionsDefine.SecretKey])
    http_profile = HttpProfile(
        reqTimeout=60 if g_param[OptionsDefine.Timeout] is None else int(g_param[OptionsDefine.Timeout]),
        reqMethod="POST",
        endpoint=g_param[OptionsDefine.Endpoint]
    )
    profile = ClientProfile(httpProfile=http_profile, signMethod="HmacSHA256")
    mod = CLIENT_MAP[g_param[OptionsDefine.Version]]
    client = mod.ScfClient(cred, g_param[OptionsDefine.Region], profile)
    client._sdkVersion += ("_CLI_" + __version__)
    models = MODELS_MAP[g_param[OptionsDefine.Version]]
    model = models.UpdateFunctionConfigurationRequest()
    model.from_json_string(json.dumps(param))
    rsp = client.UpdateFunctionConfiguration(model)
    result = rsp.to_json_string()
    jsonobj = None
    try:
        jsonobj = json.loads(result)
    except TypeError as e:
        jsonobj = json.loads(result.decode('utf-8')) # python3.3
    FormatOutput.output("action", jsonobj, g_param[OptionsDefine.Output], g_param[OptionsDefine.Filter])


def doCreateTrigger(argv, arglist):
    g_param = parse_global_arg(argv)
    if "help" in argv:
        show_help("CreateTrigger", g_param[OptionsDefine.Version])
        return

    param = {
        "FunctionName": argv.get("--FunctionName"),
        "TriggerName": argv.get("--TriggerName"),
        "Type": argv.get("--Type"),
        "TriggerDesc": argv.get("--TriggerDesc"),
        "Namespace": argv.get("--Namespace"),
        "Qualifier": argv.get("--Qualifier"),
        "Enable": argv.get("--Enable"),

    }
    cred = credential.Credential(g_param[OptionsDefine.SecretId], g_param[OptionsDefine.SecretKey])
    http_profile = HttpProfile(
        reqTimeout=60 if g_param[OptionsDefine.Timeout] is None else int(g_param[OptionsDefine.Timeout]),
        reqMethod="POST",
        endpoint=g_param[OptionsDefine.Endpoint]
    )
    profile = ClientProfile(httpProfile=http_profile, signMethod="HmacSHA256")
    mod = CLIENT_MAP[g_param[OptionsDefine.Version]]
    client = mod.ScfClient(cred, g_param[OptionsDefine.Region], profile)
    client._sdkVersion += ("_CLI_" + __version__)
    models = MODELS_MAP[g_param[OptionsDefine.Version]]
    model = models.CreateTriggerRequest()
    model.from_json_string(json.dumps(param))
    rsp = client.CreateTrigger(model)
    result = rsp.to_json_string()
    jsonobj = None
    try:
        jsonobj = json.loads(result)
    except TypeError as e:
        jsonobj = json.loads(result.decode('utf-8')) # python3.3
    FormatOutput.output("action", jsonobj, g_param[OptionsDefine.Output], g_param[OptionsDefine.Filter])


def doCreateNamespace(argv, arglist):
    g_param = parse_global_arg(argv)
    if "help" in argv:
        show_help("CreateNamespace", g_param[OptionsDefine.Version])
        return

    param = {
        "Namespace": argv.get("--Namespace"),
        "Description": argv.get("--Description"),

    }
    cred = credential.Credential(g_param[OptionsDefine.SecretId], g_param[OptionsDefine.SecretKey])
    http_profile = HttpProfile(
        reqTimeout=60 if g_param[OptionsDefine.Timeout] is None else int(g_param[OptionsDefine.Timeout]),
        reqMethod="POST",
        endpoint=g_param[OptionsDefine.Endpoint]
    )
    profile = ClientProfile(httpProfile=http_profile, signMethod="HmacSHA256")
    mod = CLIENT_MAP[g_param[OptionsDefine.Version]]
    client = mod.ScfClient(cred, g_param[OptionsDefine.Region], profile)
    client._sdkVersion += ("_CLI_" + __version__)
    models = MODELS_MAP[g_param[OptionsDefine.Version]]
    model = models.CreateNamespaceRequest()
    model.from_json_string(json.dumps(param))
    rsp = client.CreateNamespace(model)
    result = rsp.to_json_string()
    jsonobj = None
    try:
        jsonobj = json.loads(result)
    except TypeError as e:
        jsonobj = json.loads(result.decode('utf-8')) # python3.3
    FormatOutput.output("action", jsonobj, g_param[OptionsDefine.Output], g_param[OptionsDefine.Filter])


def doCopyFunction(argv, arglist):
    g_param = parse_global_arg(argv)
    if "help" in argv:
        show_help("CopyFunction", g_param[OptionsDefine.Version])
        return

    param = {
        "FunctionName": argv.get("--FunctionName"),
        "NewFunctionName": argv.get("--NewFunctionName"),
        "Namespace": argv.get("--Namespace"),
        "TargetNamespace": argv.get("--TargetNamespace"),
        "Description": argv.get("--Description"),
        "TargetRegion": argv.get("--TargetRegion"),
        "Override": Utils.try_to_json(argv, "--Override"),
        "CopyConfiguration": Utils.try_to_json(argv, "--CopyConfiguration"),

    }
    cred = credential.Credential(g_param[OptionsDefine.SecretId], g_param[OptionsDefine.SecretKey])
    http_profile = HttpProfile(
        reqTimeout=60 if g_param[OptionsDefine.Timeout] is None else int(g_param[OptionsDefine.Timeout]),
        reqMethod="POST",
        endpoint=g_param[OptionsDefine.Endpoint]
    )
    profile = ClientProfile(httpProfile=http_profile, signMethod="HmacSHA256")
    mod = CLIENT_MAP[g_param[OptionsDefine.Version]]
    client = mod.ScfClient(cred, g_param[OptionsDefine.Region], profile)
    client._sdkVersion += ("_CLI_" + __version__)
    models = MODELS_MAP[g_param[OptionsDefine.Version]]
    model = models.CopyFunctionRequest()
    model.from_json_string(json.dumps(param))
    rsp = client.CopyFunction(model)
    result = rsp.to_json_string()
    jsonobj = None
    try:
        jsonobj = json.loads(result)
    except TypeError as e:
        jsonobj = json.loads(result.decode('utf-8')) # python3.3
    FormatOutput.output("action", jsonobj, g_param[OptionsDefine.Output], g_param[OptionsDefine.Filter])


def doGetFunctionLogs(argv, arglist):
    g_param = parse_global_arg(argv)
    if "help" in argv:
        show_help("GetFunctionLogs", g_param[OptionsDefine.Version])
        return

    param = {
        "FunctionName": argv.get("--FunctionName"),
        "Offset": Utils.try_to_json(argv, "--Offset"),
        "Limit": Utils.try_to_json(argv, "--Limit"),
        "Order": argv.get("--Order"),
        "OrderBy": argv.get("--OrderBy"),
        "Filter": Utils.try_to_json(argv, "--Filter"),
        "Namespace": argv.get("--Namespace"),
        "Qualifier": argv.get("--Qualifier"),
        "FunctionRequestId": argv.get("--FunctionRequestId"),
        "StartTime": argv.get("--StartTime"),
        "EndTime": argv.get("--EndTime"),
        "SearchContext": Utils.try_to_json(argv, "--SearchContext"),

    }
    cred = credential.Credential(g_param[OptionsDefine.SecretId], g_param[OptionsDefine.SecretKey])
    http_profile = HttpProfile(
        reqTimeout=60 if g_param[OptionsDefine.Timeout] is None else int(g_param[OptionsDefine.Timeout]),
        reqMethod="POST",
        endpoint=g_param[OptionsDefine.Endpoint]
    )
    profile = ClientProfile(httpProfile=http_profile, signMethod="HmacSHA256")
    mod = CLIENT_MAP[g_param[OptionsDefine.Version]]
    client = mod.ScfClient(cred, g_param[OptionsDefine.Region], profile)
    client._sdkVersion += ("_CLI_" + __version__)
    models = MODELS_MAP[g_param[OptionsDefine.Version]]
    model = models.GetFunctionLogsRequest()
    model.from_json_string(json.dumps(param))
    rsp = client.GetFunctionLogs(model)
    result = rsp.to_json_string()
    jsonobj = None
    try:
        jsonobj = json.loads(result)
    except TypeError as e:
        jsonobj = json.loads(result.decode('utf-8')) # python3.3
    FormatOutput.output("action", jsonobj, g_param[OptionsDefine.Output], g_param[OptionsDefine.Filter])


def doListFunctions(argv, arglist):
    g_param = parse_global_arg(argv)
    if "help" in argv:
        show_help("ListFunctions", g_param[OptionsDefine.Version])
        return

    param = {
        "Order": argv.get("--Order"),
        "Orderby": argv.get("--Orderby"),
        "Offset": Utils.try_to_json(argv, "--Offset"),
        "Limit": Utils.try_to_json(argv, "--Limit"),
        "SearchKey": argv.get("--SearchKey"),
        "Namespace": argv.get("--Namespace"),
        "Description": argv.get("--Description"),
        "Filters": Utils.try_to_json(argv, "--Filters"),

    }
    cred = credential.Credential(g_param[OptionsDefine.SecretId], g_param[OptionsDefine.SecretKey])
    http_profile = HttpProfile(
        reqTimeout=60 if g_param[OptionsDefine.Timeout] is None else int(g_param[OptionsDefine.Timeout]),
        reqMethod="POST",
        endpoint=g_param[OptionsDefine.Endpoint]
    )
    profile = ClientProfile(httpProfile=http_profile, signMethod="HmacSHA256")
    mod = CLIENT_MAP[g_param[OptionsDefine.Version]]
    client = mod.ScfClient(cred, g_param[OptionsDefine.Region], profile)
    client._sdkVersion += ("_CLI_" + __version__)
    models = MODELS_MAP[g_param[OptionsDefine.Version]]
    model = models.ListFunctionsRequest()
    model.from_json_string(json.dumps(param))
    rsp = client.ListFunctions(model)
    result = rsp.to_json_string()
    jsonobj = None
    try:
        jsonobj = json.loads(result)
    except TypeError as e:
        jsonobj = json.loads(result.decode('utf-8')) # python3.3
    FormatOutput.output("action", jsonobj, g_param[OptionsDefine.Output], g_param[OptionsDefine.Filter])


def doCreateFunction(argv, arglist):
    g_param = parse_global_arg(argv)
    if "help" in argv:
        show_help("CreateFunction", g_param[OptionsDefine.Version])
        return

    param = {
        "FunctionName": argv.get("--FunctionName"),
        "Code": Utils.try_to_json(argv, "--Code"),
        "Handler": argv.get("--Handler"),
        "Description": argv.get("--Description"),
        "MemorySize": Utils.try_to_json(argv, "--MemorySize"),
        "Timeout": Utils.try_to_json(argv, "--Timeout"),
        "Environment": Utils.try_to_json(argv, "--Environment"),
        "Runtime": argv.get("--Runtime"),
        "VpcConfig": Utils.try_to_json(argv, "--VpcConfig"),
        "Namespace": argv.get("--Namespace"),
        "Role": argv.get("--Role"),
        "ClsLogsetId": argv.get("--ClsLogsetId"),
        "ClsTopicId": argv.get("--ClsTopicId"),
        "Type": argv.get("--Type"),
        "CodeSource": argv.get("--CodeSource"),
        "Layers": Utils.try_to_json(argv, "--Layers"),
        "DeadLetterConfig": Utils.try_to_json(argv, "--DeadLetterConfig"),

    }
    cred = credential.Credential(g_param[OptionsDefine.SecretId], g_param[OptionsDefine.SecretKey])
    http_profile = HttpProfile(
        reqTimeout=60 if g_param[OptionsDefine.Timeout] is None else int(g_param[OptionsDefine.Timeout]),
        reqMethod="POST",
        endpoint=g_param[OptionsDefine.Endpoint]
    )
    profile = ClientProfile(httpProfile=http_profile, signMethod="HmacSHA256")
    mod = CLIENT_MAP[g_param[OptionsDefine.Version]]
    client = mod.ScfClient(cred, g_param[OptionsDefine.Region], profile)
    client._sdkVersion += ("_CLI_" + __version__)
    models = MODELS_MAP[g_param[OptionsDefine.Version]]
    model = models.CreateFunctionRequest()
    model.from_json_string(json.dumps(param))
    rsp = client.CreateFunction(model)
    result = rsp.to_json_string()
    jsonobj = None
    try:
        jsonobj = json.loads(result)
    except TypeError as e:
        jsonobj = json.loads(result.decode('utf-8')) # python3.3
    FormatOutput.output("action", jsonobj, g_param[OptionsDefine.Output], g_param[OptionsDefine.Filter])


def doDeleteNamespace(argv, arglist):
    g_param = parse_global_arg(argv)
    if "help" in argv:
        show_help("DeleteNamespace", g_param[OptionsDefine.Version])
        return

    param = {
        "Namespace": argv.get("--Namespace"),

    }
    cred = credential.Credential(g_param[OptionsDefine.SecretId], g_param[OptionsDefine.SecretKey])
    http_profile = HttpProfile(
        reqTimeout=60 if g_param[OptionsDefine.Timeout] is None else int(g_param[OptionsDefine.Timeout]),
        reqMethod="POST",
        endpoint=g_param[OptionsDefine.Endpoint]
    )
    profile = ClientProfile(httpProfile=http_profile, signMethod="HmacSHA256")
    mod = CLIENT_MAP[g_param[OptionsDefine.Version]]
    client = mod.ScfClient(cred, g_param[OptionsDefine.Region], profile)
    client._sdkVersion += ("_CLI_" + __version__)
    models = MODELS_MAP[g_param[OptionsDefine.Version]]
    model = models.DeleteNamespaceRequest()
    model.from_json_string(json.dumps(param))
    rsp = client.DeleteNamespace(model)
    result = rsp.to_json_string()
    jsonobj = None
    try:
        jsonobj = json.loads(result)
    except TypeError as e:
        jsonobj = json.loads(result.decode('utf-8')) # python3.3
    FormatOutput.output("action", jsonobj, g_param[OptionsDefine.Output], g_param[OptionsDefine.Filter])


def doUpdateFunctionCode(argv, arglist):
    g_param = parse_global_arg(argv)
    if "help" in argv:
        show_help("UpdateFunctionCode", g_param[OptionsDefine.Version])
        return

    param = {
        "Handler": argv.get("--Handler"),
        "FunctionName": argv.get("--FunctionName"),
        "CosBucketName": argv.get("--CosBucketName"),
        "CosObjectName": argv.get("--CosObjectName"),
        "ZipFile": argv.get("--ZipFile"),
        "Namespace": argv.get("--Namespace"),
        "CosBucketRegion": argv.get("--CosBucketRegion"),
        "EnvId": argv.get("--EnvId"),
        "Publish": argv.get("--Publish"),
        "Code": Utils.try_to_json(argv, "--Code"),
        "CodeSource": argv.get("--CodeSource"),

    }
    cred = credential.Credential(g_param[OptionsDefine.SecretId], g_param[OptionsDefine.SecretKey])
    http_profile = HttpProfile(
        reqTimeout=60 if g_param[OptionsDefine.Timeout] is None else int(g_param[OptionsDefine.Timeout]),
        reqMethod="POST",
        endpoint=g_param[OptionsDefine.Endpoint]
    )
    profile = ClientProfile(httpProfile=http_profile, signMethod="HmacSHA256")
    mod = CLIENT_MAP[g_param[OptionsDefine.Version]]
    client = mod.ScfClient(cred, g_param[OptionsDefine.Region], profile)
    client._sdkVersion += ("_CLI_" + __version__)
    models = MODELS_MAP[g_param[OptionsDefine.Version]]
    model = models.UpdateFunctionCodeRequest()
    model.from_json_string(json.dumps(param))
    rsp = client.UpdateFunctionCode(model)
    result = rsp.to_json_string()
    jsonobj = None
    try:
        jsonobj = json.loads(result)
    except TypeError as e:
        jsonobj = json.loads(result.decode('utf-8')) # python3.3
    FormatOutput.output("action", jsonobj, g_param[OptionsDefine.Output], g_param[OptionsDefine.Filter])


CLIENT_MAP = {
    "v20180416": scf_client_v20180416,

}

MODELS_MAP = {
    "v20180416": models_v20180416,

}

ACTION_MAP = {
    "ListVersionByFunction": doListVersionByFunction,
    "UpdateNamespace": doUpdateNamespace,
    "Invoke": doInvoke,
    "DeleteFunction": doDeleteFunction,
    "PublishVersion": doPublishVersion,
    "DeleteTrigger": doDeleteTrigger,
    "GetFunction": doGetFunction,
    "GetFunctionAddress": doGetFunctionAddress,
    "ListNamespaces": doListNamespaces,
    "UpdateFunctionConfiguration": doUpdateFunctionConfiguration,
    "CreateTrigger": doCreateTrigger,
    "CreateNamespace": doCreateNamespace,
    "CopyFunction": doCopyFunction,
    "GetFunctionLogs": doGetFunctionLogs,
    "ListFunctions": doListFunctions,
    "CreateFunction": doCreateFunction,
    "DeleteNamespace": doDeleteNamespace,
    "UpdateFunctionCode": doUpdateFunctionCode,

}

AVAILABLE_VERSION_LIST = [
    v20180416.version,

]
AVAILABLE_VERSIONS = {
     'v' + v20180416.version.replace('-', ''): {"help": v20180416_help.INFO,"desc": v20180416_help.DESC},

}


def scf_action(argv, arglist):
    if "help" in argv:
        versions = sorted(AVAILABLE_VERSIONS.keys())
        opt_v = "--" + OptionsDefine.Version
        version = versions[-1]
        if opt_v in argv:
            version = 'v' + argv[opt_v].replace('-', '')
        if version not in versions:
            print("available versions: %s" % " ".join(AVAILABLE_VERSION_LIST))
            return
        action_str = ""
        docs = AVAILABLE_VERSIONS[version]["help"]
        desc = AVAILABLE_VERSIONS[version]["desc"]
        for action, info in docs.items():
            action_str += "        %s\n" % action
            action_str += Utils.split_str("        ", info["desc"], 120)
        helpstr = HelpTemplate.SERVICE % {"name": "scf", "desc": desc, "actions": action_str}
        print(helpstr)
    else:
        print(ErrorMsg.FEW_ARG)


def version_merge():
    help_merge = {}
    for v in AVAILABLE_VERSIONS:
        for action in AVAILABLE_VERSIONS[v]["help"]:
            if action not in help_merge:
                help_merge[action] = {}
            help_merge[action]["cb"] = ACTION_MAP[action]
            help_merge[action]["params"] = []
            for param in AVAILABLE_VERSIONS[v]["help"][action]["params"]:
                if param["name"] not in help_merge[action]["params"]:
                    help_merge[action]["params"].append(param["name"])
    return help_merge


def register_arg(command):
    cmd = NiceCommand("scf", scf_action)
    command.reg_cmd(cmd)
    cmd.reg_opt("help", "bool")
    cmd.reg_opt(OptionsDefine.Version, "string")
    help_merge = version_merge()

    for actionName, action in help_merge.items():
        c = NiceCommand(actionName, action["cb"])
        cmd.reg_cmd(c)
        c.reg_opt("help", "bool")
        for param in action["params"]:
            c.reg_opt("--" + param, "string")

        for opt in OptionsDefine.ACTION_GLOBAL_OPT:
            stropt = "--" + opt
            c.reg_opt(stropt, "string")


def parse_global_arg(argv):
    params = {}
    for opt in OptionsDefine.ACTION_GLOBAL_OPT:
        stropt = "--" + opt
        if stropt in argv:
            params[opt] = argv[stropt]
        else:
            params[opt] = None
    if params[OptionsDefine.Version]:
        params[OptionsDefine.Version] = "v" + params[OptionsDefine.Version].replace('-', '')

    config_handle = Configure()
    profile = config_handle.profile
    if ("--" + OptionsDefine.Profile) in argv:
        profile = argv[("--" + OptionsDefine.Profile)]

    is_conexist, conf_path = config_handle._profile_existed(profile + "." + config_handle.configure)
    is_creexist, cred_path = config_handle._profile_existed(profile + "." + config_handle.credential)
    config = {}
    cred = {}
    if is_conexist:
        config = config_handle._load_json_msg(conf_path)
    if is_creexist:
        cred = config_handle._load_json_msg(cred_path)
    if os.environ.get(OptionsDefine.ENV_SECRET_ID):
        cred[OptionsDefine.SecretId] = os.environ.get(OptionsDefine.ENV_SECRET_ID)
    if os.environ.get(OptionsDefine.ENV_SECRET_KEY):
        cred[OptionsDefine.SecretKey] = os.environ.get(OptionsDefine.ENV_SECRET_KEY)
    if os.environ.get(OptionsDefine.ENV_REGION):
        config[OptionsDefine.Region] = os.environ.get(OptionsDefine.ENV_REGION)

    for param in params.keys():
        if param == OptionsDefine.Version:
            continue
        if params[param] is None:
            if param in [OptionsDefine.SecretKey, OptionsDefine.SecretId]:
                if param in cred:
                    params[param] = cred[param]
                else:
                    raise Exception("%s is invalid" % param)
            else:
                if param in config:
                    params[param] = config[param]
                elif param == OptionsDefine.Region:
                    raise Exception("%s is invalid" % OptionsDefine.Region)
    try:
        if params[OptionsDefine.Version] is None:
            version = config["scf"][OptionsDefine.Version]
            params[OptionsDefine.Version] = "v" + version.replace('-', '')

        if params[OptionsDefine.Endpoint] is None:
            params[OptionsDefine.Endpoint] = config["scf"][OptionsDefine.Endpoint]
    except Exception as err:
        raise Exception("config file:%s error, %s" % (conf_path, str(err)))
    versions = sorted(AVAILABLE_VERSIONS.keys())
    if params[OptionsDefine.Version] not in versions:
        raise Exception("available versions: %s" % " ".join(AVAILABLE_VERSION_LIST))
    return params


def show_help(action, version):
    docs = AVAILABLE_VERSIONS[version]["help"][action]
    desc = AVAILABLE_VERSIONS[version]["desc"]
    docstr = ""
    for param in docs["params"]:
        docstr += "        %s\n" % ("--" + param["name"])
        docstr += Utils.split_str("        ", param["desc"], 120)

    helpmsg = HelpTemplate.ACTION % {"name": action, "service": "scf", "desc": desc, "params": docstr}
    print(helpmsg)


def get_actions_info():
    config = Configure()
    new_version = max(AVAILABLE_VERSIONS.keys())
    version = new_version
    try:
        profile = config._load_json_msg(os.path.join(config.cli_path, "default.configure"))
        version = profile["scf"]["version"]
        version = "v" + version.replace('-', '')
    except Exception:
        pass
    if version not in AVAILABLE_VERSIONS.keys():
        version = new_version
    return AVAILABLE_VERSIONS[version]["help"]
