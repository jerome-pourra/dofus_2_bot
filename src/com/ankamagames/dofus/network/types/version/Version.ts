import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../jerakine/network/INetworkType";

export class Version implements INetworkType
{

	public static readonly protocolId: number = 580;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public major: number = 0;
	public minor: number = 0;
	public code: number = 0;
	public build: number = 0;
	public buildType: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return Version.protocolId;
    }

    public isEndpointClient()
    {
        return Version.endpointClient;
    }

    public isEndpointServer()
    {
        return Version.endpointServer;
    }

    public initVersion(major: number = 0, minor: number = 0, code: number = 0, build: number = 0, buildType: number = 0): Version
    {
        this.major = major;
        this.minor = minor;
        this.code = code;
        this.build = build;
        this.buildType = buildType;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_Version(output);
    }

    public serializeAs_Version(output: ICustomDataOutput)
    {
        if(this.major < 0)
        {
            throw new Error("Forbidden value (" + this.major + ") on element major.");
        }
        output.writeByte(this.major);
        if(this.minor < 0)
        {
            throw new Error("Forbidden value (" + this.minor + ") on element minor.");
        }
        output.writeByte(this.minor);
        if(this.code < 0)
        {
            throw new Error("Forbidden value (" + this.code + ") on element code.");
        }
        output.writeByte(this.code);
        if(this.build < 0)
        {
            throw new Error("Forbidden value (" + this.build + ") on element build.");
        }
        output.writeInt(this.build);
        output.writeByte(this.buildType);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_Version(input);
    }

    private deserializeAs_Version(input: ICustomDataInput)
    {
        this._majorFunc(input);
        this._minorFunc(input);
        this._codeFunc(input);
        this._buildFunc(input);
        this._buildTypeFunc(input);
    }

    private _majorFunc(input: ICustomDataInput)
    {
        this.major = input.readByte();
        if(this.major < 0)
        {
            throw new Error("Forbidden value (" + this.major + ") on element of Version.major.");
        }
    }

    private _minorFunc(input: ICustomDataInput)
    {
        this.minor = input.readByte();
        if(this.minor < 0)
        {
            throw new Error("Forbidden value (" + this.minor + ") on element of Version.minor.");
        }
    }

    private _codeFunc(input: ICustomDataInput)
    {
        this.code = input.readByte();
        if(this.code < 0)
        {
            throw new Error("Forbidden value (" + this.code + ") on element of Version.code.");
        }
    }

    private _buildFunc(input: ICustomDataInput)
    {
        this.build = input.readInt();
        if(this.build < 0)
        {
            throw new Error("Forbidden value (" + this.build + ") on element of Version.build.");
        }
    }

    private _buildTypeFunc(input: ICustomDataInput)
    {
        this.buildType = input.readByte();
        if(this.buildType < 0)
        {
            throw new Error("Forbidden value (" + this.buildType + ") on element of Version.buildType.");
        }
    }

}